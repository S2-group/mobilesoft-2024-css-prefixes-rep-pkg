type AssetType = 'video' | 'animation';

const typesMap: { [key in AssetType]: (f: string) => string } = {
    video: filename => `/assets/videos/${filename}.mp4`,
    animation: filename => `/assets/animations/${filename}.mp4`,
};

export const resolveAssetUrl = (filename: string, type: AssetType) => typesMap[type](filename);
