import {
	writable,
	type Subscriber,
	type Unsubscriber,
	type Updater,
	type Writable
} from 'svelte/store';

export function defaultValue<T>(value: T | undefined, fallbackValue: T): T {
	if (value === undefined) return fallbackValue;
	return value;
}

export function localStorageGet<T>(key: string): T | undefined {
	try {
		const response = localStorage.getItem(key);
		if (response == null) {
			return undefined;
		}
		return JSON.parse(response);
	} catch (e) {
		return undefined;
	}
}

export function localStorageWrite<T>(key: string, value: T) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
		// eslint-disable-next-line no-empty
	} catch (e) {}
}

/**
 * A class to wrap a Svelte writable store and serialize
 * data using browser localStorage
 */
export class Store<T> implements Writable<T> {
	readonly writable: Writable<T>;
	public value: T;

	constructor(readonly localStorageKey: string, readonly defaultInitialValue: T) {
		const initialValue = defaultValue(localStorageGet<T>(localStorageKey), defaultInitialValue);
		this.writable = writable(initialValue);
		this.value = initialValue;
		this.subscribe((value) => {
			this.value = value;
			// Update local storage
			localStorageWrite(localStorageKey, value);
		});
	}

	set(value: T): void {
		return this.writable.set(value);
	}

	update(updater: Updater<T>): void {
		return this.writable.update(updater);
	}

	subscribe(run: Subscriber<T>, invalidate?: (value?: T) => void): Unsubscriber {
		return this.writable.subscribe(run, invalidate);
	}
}

export const store = {
	data: new Store<Data | null>('data', null)
};

export interface Data {
	filename: string;
	headers: string[];
	rows: string[][];
}
