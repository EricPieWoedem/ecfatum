import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import getStarfield from "./getStarfield.js";
import drawThreeGeo from "./threeGeoJSON.js";

export const Globe = () => {
  const sceneRef = useRef(null); 

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

 
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.3);
    sceneRef.current = scene; 

    const camera = new THREE.PerspectiveCamera(75, w / h, 1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);

    const container = document.getElementById("globe-container");
    if (container) {
      container.appendChild(renderer.domElement);
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const geometry = new THREE.SphereGeometry(2.6, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x36454F,
      wireframe: true,
      transparent: true,
      opacity: 1,
    });

    const globe = new THREE.Mesh(geometry, material);
    globeGroup.add(globe); 

    const stars = getStarfield({ numStars: 1000, fog: true });
    globeGroup.add(stars);

    fetch("/geojson/countries.json")
      .then((response) => response.text())
      .then((text) => {
        const data = JSON.parse(text);
        const countries = drawThreeGeo({
          json: data,
          radius: 2.8,
          materialOptions: { color: 0x80FF80 },
        });
        globeGroup.add(countries);
      });

    function animate() {
      requestAnimationFrame(animate);
      globeGroup.rotation.y += 0.010; 
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    function handleWindowResize() {
      const newW = window.innerWidth;
      const newH = window.innerHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      controls.dispose();
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      id="globe-container"
      className="absolute inset-0 w-full h-full pointer-events-none"
    ></div>
  );
};
