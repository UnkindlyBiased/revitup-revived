import { Repository } from "typeorm";

export class EntityHelper {
    static includeWithRemoval<T extends object>(
        repository: Repository<T>,
        columnsToRemove: Array<keyof T>,
    ): Array<keyof T> {
        return repository.metadata.columns
            .filter(
                (col) => !columnsToRemove.includes(col.propertyName as keyof T),
            )
            .map((col) => col.propertyName) as Array<keyof T>;
    }

    static getTruesObj(arr: Array<string>): Record<string, boolean> {
        const obj: Record<string, boolean> = {};
        for (const elem of arr) {
            obj[elem] = true;
        }

        return obj;
    }
}
