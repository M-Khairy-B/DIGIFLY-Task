import { useEffect } from 'react';
import LeafletLib from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const { MapContainer } = ReactLeaflet;

interface MapProps {
    children: (
        ReactLeafletLib: typeof ReactLeaflet,
        Leaflet: typeof LeafletLib,
    ) => React.ReactNode;
    className?: string;
    width?: string | number;
    height?: string | number;
    [key: string]: any;
}

const Map: React.FC<MapProps> = ({
    children,
    className,
    width,
    height,
    ...rest
}) => {
    const mapClassName = `w-full h-full ${className || ''}`;

    useEffect(() => {
        (async function init() {
            LeafletLib.Icon.Default.mergeOptions({
                iconRetinaUrl:
                    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                iconUrl:
                    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                shadowUrl:
                    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            });
        })();
    }, []);

    return (
        <MapContainer className={mapClassName} {...rest}>
            {children(ReactLeaflet as typeof ReactLeaflet, LeafletLib)}
        </MapContainer>
    );
};

export default Map;
