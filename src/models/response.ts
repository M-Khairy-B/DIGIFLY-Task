export interface IResponseModel<T> {
    success: boolean;
    data?: T[];
    message: string;
}

export interface IPaginatorModel<T> extends IPaginatorMetadataModel {
    items: T[];
}

export interface IPaginatorMetadataModel {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    startIndex: number;
    endIndex: number;
}
