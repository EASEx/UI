const isValidHttpUrl = (string: string) => {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

const isValidWsUrl = (string: string) => {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "ws:" || url.protocol === "wss:";
}

const detectWebGL = () => {
    // Create canvas element. The canvas is not added to the
    // document itself, so it is never displayed in the
    // browser window.
    const canvas = document.createElement("canvas");
    // Get WebGLRenderingContext from canvas element.
    const gl = canvas.getContext("webgl")
        || canvas.getContext("experimental-webgl");
    // Report the result.
    if (gl && gl instanceof WebGLRenderingContext) {
        return true
    } else {
        return false
    }
}

export { detectWebGL,isValidHttpUrl, isValidWsUrl }