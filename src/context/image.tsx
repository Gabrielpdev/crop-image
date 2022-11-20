import React, { useContext, createContext, useState } from 'react';

export interface IImage {
  src: string;
  scale: number;
}

export type ImageContextData = {
  image: IImage | null;
  setImage: (value: IImage | null) => void;
};

export const ImageContext = createContext<ImageContextData>(
  {} as ImageContextData,
);

export const ImageProvider = ({ children }: any) => {
  const [image, setImage] = useState<IImage | null>(null);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export function useImage(): ImageContextData {
  const context = useContext(ImageContext);

  return context;
}
