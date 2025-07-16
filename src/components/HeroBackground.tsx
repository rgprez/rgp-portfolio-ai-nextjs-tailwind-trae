"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface HeroBackgroundProps {
  mousePosition?: { x: number; y: number };
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  mousePosition = { x: 0, y: 0 },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    // Use container dimensions for aspect ratio
    const cameraContainerWidth = containerRef.current.clientWidth;
    const cameraContainerHeight = containerRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(
      75,
      cameraContainerWidth / cameraContainerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    // Set size to match container dimensions instead of full window
    const rendererContainerWidth = containerRef.current.clientWidth;
    const rendererContainerHeight = containerRef.current.clientHeight;
    renderer.setSize(rendererContainerWidth, rendererContainerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      // Random positions in a sphere
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Material with custom shader for neural network effect
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x4a90e2, // Blue color for AI theme
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Create points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Animation function
    const animate = () => {
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0003;
        particlesRef.current.rotation.y += 0.0005;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      frameIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current || !containerRef.current) return;
      
      // Use container dimensions instead of window dimensions
      const resizeContainerWidth = containerRef.current.clientWidth;
      const resizeContainerHeight = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = resizeContainerWidth / resizeContainerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(resizeContainerWidth, resizeContainerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameIdRef.current);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  // Update particles based on mouse position
  useEffect(() => {
    if (particlesRef.current && mousePosition && containerRef.current) {
      // Get container dimensions
      const mouseContainerWidth = containerRef.current.clientWidth;
      const mouseContainerHeight = containerRef.current.clientHeight;
      
      // Convert mouse position to 3D space using container dimensions
      // mousePosition is normalized (0-1), so we use it directly
      const mouseX = mousePosition.x * 2 - 1;
      const mouseY = -mousePosition.y * 2 + 1;

      // Subtle tilt based on mouse position
      particlesRef.current.rotation.x = mouseY * 0.1;
      particlesRef.current.rotation.y = mouseX * 0.1;
    }
  }, [mousePosition]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden h-full w-full"
      aria-hidden="true"
    />
  );
};

export default HeroBackground;
