export interface NoteInterface {
    id: number;
    title: string;
    text: string;
    handleDeleteNote?(id: number): () => {};

}
