const svgRef = ref(null);
const isAnimating = ref(false); // 动画进行中的标志
nextTick(() => {
  const animation = gsap.to(".animation", {
    rotation: 180,
    duration: 0.8,
    repeat: 0,
    ease: "sine.inOut",
    transformOrigin: "center",
    paused: true,
    onComplete: () => {
      // 动画完成时的处理逻辑
      isAnimating.value = false; // 标志设置为 false，表示动画已完成
    }
  });
  // 鼠标移入事件处理函数
  const handleMouseEnter = () => {
    if (animation && !isAnimating.value) {
      isAnimating.value = true; // 标志设置为 true，表示动画正在进行
      animation.restart(); // 重新开始动画
    }
  };
  // 绑定鼠标移入事件
  svgRef.value.addEventListener('mouseenter', handleMouseEnter);
});