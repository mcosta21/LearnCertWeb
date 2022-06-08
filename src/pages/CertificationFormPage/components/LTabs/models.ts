import { ReactElement, ReactNode } from 'react';

export interface LTabProps {
    currentTab?: string;
    tabs?: LTabModel[];
    onChange: (selectedTab: string) => void;
    onAddTab: (event: React.MouseEvent<HTMLElement> | undefined) => void;
    onRightClick?: (tab: LTabModel, event?: React.MouseEvent<HTMLElement>) => void;
}

export class LTabModel {
    id: string;
    name: string;
    tab: ReactNode;
    icon?: ReactElement;
    iconPosition?: "bottom" | "top" | "end" | "start";
    invalid?: boolean = false;

    constructor(id: string, name: string, tab: ReactNode) {
        this.id = id,
        this.name = name;
        this.tab = tab;
    }
}

export interface LTabContentProps {
  value: string;
  visible: boolean;
  children: ReactNode
}