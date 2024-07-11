import { Filme } from "./Filme";

export class Terror extends Filme {

	private _sobrenatural: string;
	private _suspense: string;


	constructor(nome: string, id: number, tipo: number, preco: number, sobrenatural: string, suspense: string) {
		super(id, nome, tipo, preco)
		this._sobrenatural = sobrenatural;
		this._suspense = suspense;
	}

	public get sobrenatural(): string {
		return this._sobrenatural;
	}

	public get suspense(): string {
		return this._suspense;
	}

	public set sobrenatural(value: string) {
		this._sobrenatural = value;
	}

	public set suspense(value: string) {
		this._suspense = value;
	}

	public visualizar() {
		super.visualizar();
		console.log(`\nSobrenatural: ${this._sobrenatural}`);
		console.log(`\nSuspense: ${this._suspense}`);
	}
}