import { ClassNamesMap } from '../utils';

const getMappedClassNameProps = <T> (props: T, extraProps: string[], namesMap: ClassNamesMap): Partial<T> | null => {
  const mappedProps: T = <T>{};
  const propsToMap = Object.keys(props)
    .filter((key) => key === 'className' || extraProps.includes(key));

  propsToMap.forEach((key) => {
    mappedProps[key] = getMappedClassName(props[key], namesMap);
  });

  return propsToMap.length ? mappedProps : null;
};

export default getMappedClassNameProps;

const getMappedClassName = <T>(className: T, namesMap: ClassNamesMap): T => {
  if (typeof className === 'string') {
    return getMappedStringClassName(className, namesMap) as unknown as T;
  }

  if (typeof className === 'function') {
    const fnWithMapping = (...args: any[]) => getMappedClassName(className(...args), namesMap);
    return fnWithMapping as unknown as T;
  }

  return className;
};

const getMappedStringClassName = (className: string | string[], namesMap: ClassNamesMap): string => {
  const namesArray = Array.isArray(className) ? className : [className];
  const splitNamesArr = namesArray.flatMap((name) => splitClassName(name));

  return splitNamesArr.map((name) => namesMap[name] ?? name).join(' ');
};

const splitClassName = (className: string): string[] => {
  return className.split(/\s+/g);
};
