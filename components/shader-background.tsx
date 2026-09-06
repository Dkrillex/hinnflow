"use client";

import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

/**
 * 全站固定流动背景，配色与参数来自 v0「Shaders Hero Section」模板：
 * 主层 MeshGradient(#000/#8b5cf6/#fff/#1e1b4b/#4c1d95, speed 0.3)
 * 叠加层 MeshGradient(#000/#fff/#8b5cf6/#000, speed 0.2, opacity .6, screen)
 * 同时内嵌模板同款 SVG 滤镜（glass-effect），供玻璃徽章使用。
 */
export default function ShaderBackground() {
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const ok =
        !!canvas.getContext("webgl2") || !!canvas.getContext("webgl");
      if (!ok) document.body.classList.add("no-webgl");
      setWebglFailed(!ok);
    } catch {
      document.body.classList.add("no-webgl");
      setWebglFailed(true);
    }
  }, []);

  if (webglFailed) return null;

  return (
    <>
      <div className="shader-fallback" aria-hidden="true" />
      <div className="shader-stage" aria-hidden="true">
      <svg className="absolute w-0 h-0">
        <defs>
          <filter
            id="glass-effect"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feTurbulence
              baseFrequency="0.005"
              numOctaves="1"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="0.3"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="shader-layer-a"
        colors={[
          "#001447",
          "#012293",
          "#0544E9",
          "#001447",
          "#0544E9",
          "#0295F4",
        ]}
        speed={0.3}
        distortion={1.6}
        maxPixelCount={1600 * 900}
      />
      <MeshGradient
        className="shader-layer-b"
        colors={["#001447", "#05AFFE", "#0295F4", "#001447"]}
        speed={0.2}
        distortion={1.8}
        maxPixelCount={1600 * 900}
      />
      </div>
    </>
  );
}
