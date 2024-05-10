// Runs after all main thread work

export default (load) => {
  window.requestIdleCallback(
    async () => {
      const hydrate = await load();
      await hydrate();
    },
    { once: true },
  );
};
