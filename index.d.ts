import { BehaviorSubject } from "rxjs";

declare module 'react-hooked-state' {
    export interface IState {
        [key: string]: any
    }
    
    export interface Store {
        store: BehaviorSubject<IState>,
        middlewares: any[]
    }

    export type Selector = (state: IState) => any;
    
    export type UpdateStore = (newValue: any) => void;
    
    export function createStore(initialState: IState, middlewares?: any[]): Store;

    export function useSelector(selector: Selector): any;

    export function useUpdateStore(): UpdateStore;
}
