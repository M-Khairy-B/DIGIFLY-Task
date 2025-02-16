import React from 'react';
import { useI18n } from '@/src/locales';
import Map from '../Map';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const PartTwo = () => {
    const DEFAULT_CENTER = [30.0153, 31.2357];
    const t = useI18n();

    return (
        <section className="pt-[60px] pb-[60px] md:pt-[120px] md:pb-[107px]">
            <div className="container">
                <div className="flex items-center gap-x-[16px] mb-[32px]">
                    <div className="w-16 h-1 bg-[#6D5CBC] rounded-full"></div>
                    <h2 className="font-bold text-[32px] leading-[48px]">
                        {t('partTwoTitle')}
                    </h2>
                </div>
            </div>

            <div className="map-main relative">
                <Map
                    className="w-full !h-[647px] relative"
                    width="100%"
                    height="647px"
                    center={DEFAULT_CENTER}
                    zoom={12}
                >
                    {({
                        TileLayer,
                        Marker,
                        Popup,
                    }: {
                        TileLayer: any;
                        Marker: any;
                        Popup: any;
                    }) => (
                        <>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={DEFAULT_CENTER}>
                                <Popup
                                    closeButton={false}
                                    autoPan={false}
                                    closeOnClick={false}
                                >
                                    <div className="">
                                        <span className="ml-1 text-white font-medium text-[20px] leading-[30px]">
                                            شركة
                                        </span>
                                        <span className="font-bold text-[20px] leading-[30px] ml-1 text-[#49BD88]">
                                            ديجي
                                        </span>
                                        <span className="text-white font-medium text-[20px] leading-[30px]">
                                            فلاي ترحب بكم
                                        </span>
                                    </div>
                                </Popup>
                            </Marker>
                        </>
                    )}
                </Map>
            </div>
        </section>
    );
};
