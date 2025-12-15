// Los modelos (interfaces o classes) deben estar en un archivo separado para que los componentes puedan importarlo sin duplicación

export interface Tarea {
    nombre: string,
    descripcion: string,
    urgente: boolean,
    fecha: Date
}