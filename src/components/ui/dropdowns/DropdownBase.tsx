import { FC, ReactNode } from 'react';
import { Dropdown, MenuProps } from 'antd/lib';
import ArrowIcon from '@/src/components/ui/icons/ArrowIcon';

interface IProps {
    title: ReactNode;
    items: MenuProps['items'];
    showArrow?: boolean;
    trigger?: ('contextMenu' | 'click' | 'hover')[];
}

const DropdownBase: FC<IProps> = (props) => {
    const { title, items, trigger, showArrow = true } = props;
    return (
        <Dropdown
            menu={{ items }}
            overlayClassName={'base-dropdown-overlay'}
            trigger={trigger}
        >
            <div className="flex items-center cursor-pointer base-dropdown">
                <span>{title}</span>
                {showArrow && <ArrowIcon className={'fill-c_black'} />}
            </div>
        </Dropdown>
    );
};
export default DropdownBase;
