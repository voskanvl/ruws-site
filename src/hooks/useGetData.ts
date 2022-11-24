import { useCallback, useEffect, useState } from "react";
import DATA, { ProjectsData } from "../data/data";

export type GetDataProps = {
    minX?: number;
    maxX?: number;
    minY?: number;
    maxY?: number;
};

export default function useGetData({ minX = 0, maxX, minY = 0, maxY }: GetDataProps) {
    const [data, setData] = useState<ProjectsData[]>(DATA);
    const [available, setAvailable] = useState<boolean>(false);
    const random = (min: number, max: number) => min + Math.random() * (max - min);

    useEffect(() => {
        setData(
            DATA.map(e => ({
                ...e,
                left: random(minX, maxX || minX),
                top: random(minY, maxY || minY),
            })),
        );
        setAvailable(true);
    }, [maxX, maxY]);
    return { data, setData, available };
}
