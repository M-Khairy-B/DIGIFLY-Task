import { FC, SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {}

const ArrowIcon: FC<IProps> = (props) => {
    return (
        <svg
            width="5.333008"
            height="9.333496"
            viewBox="0 0 5.33301 9.3335"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <path
                id="Path 94"
                d="M0.195312 1.13818C-0.0654297 0.877686 -0.0654297 0.455566 0.195312 0.195312C0.455078 -0.0651855 0.876953 -0.0651855 1.1377 0.195312L5.1377 4.19531C5.38965 4.44775 5.39941 4.854 5.1582 5.11719L1.49121 9.11719C1.24219 9.38867 0.820312 9.40698 0.548828 9.1582C0.277344 8.90942 0.259766 8.48755 0.507812 8.21606L3.74316 4.68677L0.195312 1.13818Z"
                fill="#666666"
                fillOpacity="1.000000"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default ArrowIcon;
