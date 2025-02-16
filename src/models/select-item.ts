export interface ISelectItemModel {
    label: string;
    value: string;
}

export class SelectItemModel implements ISelectItemModel {
    label: string;
    value: string;

    constructor(label?: string, value?: string) {
        this.label = label || '';
        this.value = value || '';
    }
}
