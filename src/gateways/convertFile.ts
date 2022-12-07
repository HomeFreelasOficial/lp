

export default function convert(blob: Blob): PromiseLike<ArrayBuffer | string> {
    return new Promise((res, rej) => {
      if (!blob) rej();
      else {
        const reader = new FileReader();
        reader.onload = () => res(reader.result!);
        reader.onerror = () => rej(new Error('Não foi possível converter o arquivo'));
        reader.readAsDataURL(blob);
      }
    });
  }