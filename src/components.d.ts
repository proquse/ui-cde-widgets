/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Card } from "@pax2pay/model-cde";
import { Error } from "gracely";
import { Message } from "./components/iframe/key-generate/Message";
export namespace Components {
    interface P2pCdeCardButton {
        "card"?: Card.Token | Error;
        "cardHolderName"?: string;
        "nameAlreadyEncoded": boolean;
        "task": "print" | "pdf";
    }
    interface P2pCdeCardDisplay {
        "card"?: Card.Token | Error;
        "cardPart": "pan" | "csc" | "expires";
        "feature"?: "copy";
        "format"?: "plain" | "labelled";
    }
    interface P2pCdeCardIframe {
        "buttons": boolean;
        "cardHolderName"?: string;
        "nameAlreadyEncoded": boolean;
        "token"?: Card.Token | Error;
    }
    interface P2pCdeCardInput {
    }
    interface P2pCdeCardKeyGenerate {
        "generate": () => Promise<Message>;
        "parent"?: string;
    }
    interface P2pCdeVirtualCard {
        "card"?: Card.Token | Error;
        "cardHolderName"?: string;
        "company"?: string;
        "nameAlreadyEncoded": boolean;
    }
}
declare global {
    interface HTMLP2pCdeCardButtonElement extends Components.P2pCdeCardButton, HTMLStencilElement {
    }
    var HTMLP2pCdeCardButtonElement: {
        prototype: HTMLP2pCdeCardButtonElement;
        new (): HTMLP2pCdeCardButtonElement;
    };
    interface HTMLP2pCdeCardDisplayElement extends Components.P2pCdeCardDisplay, HTMLStencilElement {
    }
    var HTMLP2pCdeCardDisplayElement: {
        prototype: HTMLP2pCdeCardDisplayElement;
        new (): HTMLP2pCdeCardDisplayElement;
    };
    interface HTMLP2pCdeCardIframeElement extends Components.P2pCdeCardIframe, HTMLStencilElement {
    }
    var HTMLP2pCdeCardIframeElement: {
        prototype: HTMLP2pCdeCardIframeElement;
        new (): HTMLP2pCdeCardIframeElement;
    };
    interface HTMLP2pCdeCardInputElement extends Components.P2pCdeCardInput, HTMLStencilElement {
    }
    var HTMLP2pCdeCardInputElement: {
        prototype: HTMLP2pCdeCardInputElement;
        new (): HTMLP2pCdeCardInputElement;
    };
    interface HTMLP2pCdeCardKeyGenerateElement extends Components.P2pCdeCardKeyGenerate, HTMLStencilElement {
    }
    var HTMLP2pCdeCardKeyGenerateElement: {
        prototype: HTMLP2pCdeCardKeyGenerateElement;
        new (): HTMLP2pCdeCardKeyGenerateElement;
    };
    interface HTMLP2pCdeVirtualCardElement extends Components.P2pCdeVirtualCard, HTMLStencilElement {
    }
    var HTMLP2pCdeVirtualCardElement: {
        prototype: HTMLP2pCdeVirtualCardElement;
        new (): HTMLP2pCdeVirtualCardElement;
    };
    interface HTMLElementTagNameMap {
        "p2p-cde-card-button": HTMLP2pCdeCardButtonElement;
        "p2p-cde-card-display": HTMLP2pCdeCardDisplayElement;
        "p2p-cde-card-iframe": HTMLP2pCdeCardIframeElement;
        "p2p-cde-card-input": HTMLP2pCdeCardInputElement;
        "p2p-cde-card-key-generate": HTMLP2pCdeCardKeyGenerateElement;
        "p2p-cde-virtual-card": HTMLP2pCdeVirtualCardElement;
    }
}
declare namespace LocalJSX {
    interface P2pCdeCardButton {
        "card"?: Card.Token | Error;
        "cardHolderName"?: string;
        "nameAlreadyEncoded"?: boolean;
        "task"?: "print" | "pdf";
    }
    interface P2pCdeCardDisplay {
        "card"?: Card.Token | Error;
        "cardPart"?: "pan" | "csc" | "expires";
        "feature"?: "copy";
        "format"?: "plain" | "labelled";
    }
    interface P2pCdeCardIframe {
        "buttons"?: boolean;
        "cardHolderName"?: string;
        "nameAlreadyEncoded"?: boolean;
        "token"?: Card.Token | Error;
    }
    interface P2pCdeCardInput {
    }
    interface P2pCdeCardKeyGenerate {
        "parent"?: string;
    }
    interface P2pCdeVirtualCard {
        "card"?: Card.Token | Error;
        "cardHolderName"?: string;
        "company"?: string;
        "nameAlreadyEncoded"?: boolean;
    }
    interface IntrinsicElements {
        "p2p-cde-card-button": P2pCdeCardButton;
        "p2p-cde-card-display": P2pCdeCardDisplay;
        "p2p-cde-card-iframe": P2pCdeCardIframe;
        "p2p-cde-card-input": P2pCdeCardInput;
        "p2p-cde-card-key-generate": P2pCdeCardKeyGenerate;
        "p2p-cde-virtual-card": P2pCdeVirtualCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "p2p-cde-card-button": LocalJSX.P2pCdeCardButton & JSXBase.HTMLAttributes<HTMLP2pCdeCardButtonElement>;
            "p2p-cde-card-display": LocalJSX.P2pCdeCardDisplay & JSXBase.HTMLAttributes<HTMLP2pCdeCardDisplayElement>;
            "p2p-cde-card-iframe": LocalJSX.P2pCdeCardIframe & JSXBase.HTMLAttributes<HTMLP2pCdeCardIframeElement>;
            "p2p-cde-card-input": LocalJSX.P2pCdeCardInput & JSXBase.HTMLAttributes<HTMLP2pCdeCardInputElement>;
            "p2p-cde-card-key-generate": LocalJSX.P2pCdeCardKeyGenerate & JSXBase.HTMLAttributes<HTMLP2pCdeCardKeyGenerateElement>;
            "p2p-cde-virtual-card": LocalJSX.P2pCdeVirtualCard & JSXBase.HTMLAttributes<HTMLP2pCdeVirtualCardElement>;
        }
    }
}
