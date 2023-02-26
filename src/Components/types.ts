export interface PrizeProps {
    year: string;
    category: string;
    laureates: LaureatesProps[];
}

export interface LaureatesProps {
    id: string;
    firstname: string;
    surname: string;
    motivation: string;
    share: string;
}

export interface FilterProps {
    year?: string[];
    category?: string;
    nobelData?: PrizeProps[];
}

export interface NobelFilterProps extends FilterProps {
    onYearClick: (value: string[]) => void;
    onCatClick: (value: string) => void;
}

export interface NobleDetailProps {
    open: boolean;
    onClose: ()=> void;
    detailData: LaureatesProps;
    year: string;
    category: string;
}