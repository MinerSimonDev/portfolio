// src/components/Donut.jsx
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import '../styles/Donut.css'

const Donut = () => {
  const [frame, setFrame] = useState("");

  useEffect(() => {
    let x = 1760,
      z = 0,
      y = 0;

    const renderFrame = () => {
      z += 0.055;
      y += 0.015;
      const a = [...new Array(x)].map((_, r) => (r % 80 === 79 ? "\n" : " "));
      const r = new Array(x).fill(0);
      const t = Math.cos(z),
        e = Math.sin(z),
        n = Math.cos(y),
        o = Math.sin(y);
      for (let s = 0; s < 6.28; s += 0.07) {
        const c = Math.cos(s),
          h = Math.sin(s);
        for (let s = 0; s < 6.28; s += 0.02) {
          const v = Math.sin(s),
            M = Math.cos(s),
            i = c + 2,
            l = 1 / (v * i * e + h * t + 5),
            p = v * i * t - h * e,
            d = 0 | (40 + 30 * l * (M * i * n - p * o)),
            m = 0 | (12 + 15 * l * (M * i * o + p * n)),
            f = 0 | (8 * ((h * e - v * c * t) * n - v * c * e - h * t - M * c * o)),
            y = d + 80 * m;
          if (m < 22 && m >= 0 && d >= 0 && d < 79 && l > r[y]) {
            r[y] = l;
            a[y] = ".,-~:;=!*#$@"[f > 0 ? f : 0];
          }
        }
      }
      setFrame(a.join(""));
    };

    const interval = setInterval(renderFrame, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ whiteSpace: "pre", fontFamily: "Courier New, monospace", fontSize: "16.999px", lineHeight: "16.999px", letterSpacing: "-1px", color: "#a6acbd", marginLeft: "-5vw", userSelect: "none", marginTop: '5vh' }} className="spinning-donut">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        {frame}
      </motion.div>
    </div>
  );
};

export default Donut;
