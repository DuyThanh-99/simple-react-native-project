interface Istyle {
    height?: number;
    width?: number;
    backgroundColor?: string;
    borderRadius?: number;
    padding?: number;
    marginRight?: number;
}

interface IBanner {
    item?: any;
}

interface IlistProduct extends Istyle {
    title?: string;
    content?: string; 
    item?: any;
    // color?: String;
}

interface IList {
    url?: string;
    title?: string;
    children: JSX.Element | null;
}

interface IProduct {
    item?: any;
}

interface ILabel {
    name?: string;
    image?: any;
    item?: any;
}

interface IItem {
    item?: any;
    numColumns: number;
    style?: any
}

interface IInfor {
    
}

interface IPaginator {
    data: any;
    scrollX?: any;
}

interface Ipa {
    id?: number;
    image?: any; 
}

interface Idrawer {
    props?: any;
}