import {getMetadataArgsStorage} from "../../globals";
import {EventListenerTypes} from "../../metadata/types/EventListenerTypes";
import {EntityListenerMetadataArgs} from "../../metadata-args/EntityListenerMetadataArgs";

/**
 * Calls a method on which this decorator is applied before this entity soft removal.
 */
export function BeforeSoftRemove(): PropertyDecorator {
    return function (object: Object, propertyName: string) {

        getMetadataArgsStorage().entityListeners.push({
            target: object.constructor,
            propertyName: propertyName,
            type: EventListenerTypes.BEFORE_SOFT_REMOVE
        } as EntityListenerMetadataArgs);
    };
}
