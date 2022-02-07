import {makeAutoObservable} from "mobx";
import {idGenerator} from "../Utils/Utils";
import _ from 'lodash';
import {LOCAL_STORAGE_KEY} from "../Constants/Constants";
import {DEFAULT_PRODUCTS} from "./DefaultData";

const ProductsStore = makeAutoObservable({
    products: [],
    productsSorted: [],
    productsToShow: [],
    selectedProduct: undefined,
    setProducts: (arr) => {
        ProductsStore.products = [...arr];
    },
    setProductsToShow: (arr) => {
        ProductsStore.productsToShow = [...arr];
    },
    setSelectedProduct: (id) =>{
        ProductsStore.selectedProduct = ProductsStore.products.find(product =>  product?.id === id);
        !id && (ProductsStore.selectedProduct = {
                id: idGenerator()
            }
        )
    },
    updateSelectedProduct: (newProduct) => {
        ProductsStore.selectedProduct = {... newProduct};
    },
    deleteProduct: (id) => {
        const newProducts = ProductsStore.products.filter(product =>  product?.id !== id);
        ProductsStore.products = [...newProducts];
        (ProductsStore.selectedProduct?.id === id) && (ProductsStore.selectedProduct = undefined);
        ProductsStore.saveToLocalStorage(ProductsStore.products);
    },
    saveProduct: (product) => {
        const i = _.findIndex(ProductsStore.products,{id:product?.id});
        (i >= 0) ? (ProductsStore.products[i] = product) : (ProductsStore.products.push({...product, creationDate: Date.now()}));
        ProductsStore.products = [...ProductsStore.products];
        ProductsStore.saveToLocalStorage(ProductsStore.products);
    },
    searchProducts: (searchConditions) =>{
        searchConditions ?
            (ProductsStore.productsSorted = ProductsStore.products.filter(
                    product =>
                        product.name.toLowerCase().includes(searchConditions.toLowerCase())
                        || product.description.toLowerCase().includes(searchConditions.toLowerCase())
                )
            )
            : (ProductsStore.productsSorted = [...ProductsStore.products]);
    },
    sortProducts: (conditions) => {
        switch (conditions){
            case 'price':
                ProductsStore.productsSorted = [...ProductsStore.productsSorted.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))];
                break;
            case 'addingTime':
                ProductsStore.productsSorted = [...ProductsStore.productsSorted.sort((a,b) => (a.creationDate > b.creationDate) ? -1 : ((b.creationDate > a.creationDate) ? 1 : 0))];
                break;
            default: break;
        }
    },
    getFromLocalStorage: () => {
        try {
            const item = window.localStorage.getItem(LOCAL_STORAGE_KEY);
            !JSON.parse(item)?.length && ProductsStore.saveToLocalStorage(DEFAULT_PRODUCTS);
            return JSON.parse(item)?.length ? JSON.parse(item) : DEFAULT_PRODUCTS;
        } catch (error) {
            console.log(error);
            return DEFAULT_PRODUCTS;
        }
    },
    saveToLocalStorage: (value) =>{
        try {
            window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    }
});

export default ProductsStore;