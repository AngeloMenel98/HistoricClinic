import { error } from 'console';

export function handleError(mssgToIgnore: string, customAction?: Function) {
  return (e: any) => {
    if (customAction) {
      customAction(e);
    }

    if (e?.error?.message === mssgToIgnore) {
      return;
    }

    if (e?.error?.status === 404) {
      console.log('Recurso no encontrado: ', e);
    }

    if (e?.error?.status === 500) {
      console.log('Error en el servidor:', error);
    }
  };
}
