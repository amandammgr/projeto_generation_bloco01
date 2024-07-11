import { Filme } from "./Filme";

export class Romance extends Filme {

	private _comediaRomantica: string;
	private _romanceCliche: string;


	constructor(id: number, tipo: number, preco: number, comediaRomantica: string, romanceCliche: string, nome: string) {
		super(id, nome, tipo, preco)
		this._comediaRomantica = comediaRomantica;
		this._romanceCliche = romanceCliche;
	}

	public get comediaRomantica(): string {
		return this._comediaRomantica;
	}

	public get romanceCliche(): string {
		return this._romanceCliche;
	}

	public set comediaRomantica(value: string) {
		this._comediaRomantica = value;
	}

	public set romanceCliche(value: string) {
		this._romanceCliche = value;
	}

	public visualizar() {
		super.visualizar();
		console.log(`\nComedia Romantica: ${this._comediaRomantica}`);
		console.log(`\nRomance Cliche: ${this._romanceCliche}`);

	}

}