import {makeAutoObservable} from "mobx";
import {idGenerator} from "../Utils/Utils";
import _ from 'lodash';
import {LOCAL_STORAGE_KEY} from "../Constants/Constants";
import {DEFAULT_PRODUCTS} from "./DefaultData";

class ProductsStore {
    constructor() {
        makeAutoObservable(this);
    }
    products = [];
    productsToShow = [];
    selectedProduct = undefined;
    searchConditions = undefined;
    sortConditions = 'price';
    currentPage = 1;
    pageLimit = 5;
    pageNeighbours = 0;

    setProducts(arr){
        this.products = [...arr];
    }

    setSelectedProduct(id){
        this.selectedProduct = this.products.find(product =>  product?.id === id);
        !id && (this.selectedProduct = {
                id: idGenerator()
                }
            )
    }

    updateSelectedProduct(newProduct) {
        this.selectedProduct = {... newProduct};
    }

    deleteProduct(id){
        const newProducts = this.products.filter(product =>  product?.id !== id);
        this.products = [...newProducts];
        (this.selectedProduct?.id === id) && (this.selectedProduct = undefined);
        this.saveToLocalStorage(this.products);
    }

    saveProduct(product){
        // let newProducts = [...this.products];
        // const i = _.findIndex(newProducts,{id:product?.id});
        // (i >= 0) ? (newProducts[i] = product) : (newProducts.push({...product, creationDate: Date.now()}));
        // this.products = [...newProducts];
        const i = _.findIndex(this.products,{id:product?.id});
        (i >= 0) ? (this.products[i] = product) : (this.products.push({...product, creationDate: Date.now()}));
        // this.searchProducts(this.searchConditions);
        this.products = [...this.products];
        this.saveToLocalStorage(this.products);
    }
    searchProducts(searchConditions){
        searchConditions ?
            (this.productsToShow = this.products.filter(
                product =>
                    product.name.toLowerCase().includes(searchConditions.toLowerCase())
                    || product.description.toLowerCase().includes(searchConditions.toLowerCase())
                )
            )
            : (this.productsToShow = [...this.products]);
    }
    setSearchConditions(conditions){
        this.searchConditions = conditions;
    }
    setSortConditions(conditions){
        this.sortConditions = conditions;
    }
    sortProducts(conditions){
        switch (conditions){
            case 'price':
                this.productsToShow.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
                break;
            case 'addingTime':
                this.productsToShow.sort((a,b) => (a.creationDate > b.creationDate) ? -1 : ((b.creationDate > a.creationDate) ? 1 : 0));
                break;
            default: break;
        }
    }

    setCurrentPage(value){
        this.currentPage = value;
    }

    getFromLocalStorage(){
        try {
            const item = window.localStorage.getItem(LOCAL_STORAGE_KEY);
            !JSON.parse(item)?.length && this.saveToLocalStorage(DEFAULT_PRODUCTS);
            return JSON.parse(item)?.length ? JSON.parse(item) : DEFAULT_PRODUCTS;
        } catch (error) {
            console.log(error);
            return DEFAULT_PRODUCTS;
        }
    }
    saveToLocalStorage(value){
        try {
            window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    }
}
export default ProductsStore;