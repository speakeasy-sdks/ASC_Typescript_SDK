/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";

export class ListPetsRequest extends SpeakeasyBase {
    /**
     * How many items to return at one time (max 100)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;
}

export class ListPetsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * unexpected error
     */
    @SpeakeasyMetadata()
    error?: components.ErrorT;

    @SpeakeasyMetadata()
    headers: Record<string, string[]>;

    /**
     * A paged array of pets
     */
    @SpeakeasyMetadata({ elemType: components.Pet })
    pets?: components.Pet[];

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
