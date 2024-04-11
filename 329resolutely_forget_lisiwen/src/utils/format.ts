export function formatCount(count: number) {
  if (count > 100000) {
    return `${(count / 10000).toFixed(1)}万`;
  } else {
    return count;
  }
}
export function formatTime(time: number) {
  const date = new Date(time * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
export function getImageSize(imageUrl: string, width: number, height: number = width) {
  return imageUrl + `?param=${width}x${height}`;
}

export function getPlayUrl(id: any) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}
