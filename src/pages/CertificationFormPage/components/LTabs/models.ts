import { ReactNode } from 'react';

export interface LTabProps {
    currentTab?: string;
    tabs?: LTabModel[];
    onChange: (selectedTab) => void;
    onAddTab: (event: React.MouseEvent<HTMLElement> | undefined) => void;
}

export class LTabModel {
    id: string;
    name: string;
    tab: ReactNode;

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