import React from "react";
import Lottie from "react-lottie-player";

import lottieJson from "../../public/main_animation.json";

export default function Animation() {
    return <Lottie loop animationData={lottieJson} play />;
}
