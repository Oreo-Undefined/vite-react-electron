import { createContext, useContext, forwardRef } from 'react'
const modules = import.meta.globEager('./*.js')

export const context = createContext();
export const Provider = context.Provider;

export function inject(arg0, ...args) {
  return function (WrappedComponent) {
    return forwardRef((props, ref) => {
      const ctx = useContext(context);
      let storeProps;
      if (typeof arg0 === 'function') {
        storeProps = arg0(ctx) || {};
      } else {
        storeProps = [arg0, ...args].reduce((prev, keyStr) => ({ ...prev, [keyStr]: ctx[keyStr] }), {})
      }
      return <WrappedComponent {...storeProps} {...props} ref={ref} />;
    });
  }
}

export const store = Object.entries(modules)
  .reduce((prev, [key, Module]) => ({
    [key.replace(/^\.\/(.*?)\.js$/, (_, c) => c.toLowerCase())]: new Module.default()
  }), {})