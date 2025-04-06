import { Common } from './common';
import { Utilities } from './utilities';

const ExtensionNamespaces = ['utilities'];

class App {
	common: Common;
	utilities: Utilities;

	constructor() {
		this.common = new Common();
		this.utilities = new Utilities(this.common);
	}

	executeOnLoad = () => {
		this.addListener();
	};

	private addListener = () => {
		window.addEventListener(
			'message',
			(event) => {
				const message: ExtensionMessage = event.data;
				if (!ExtensionNamespaces.includes(message.category)) {
					return;
				}

				switch (message.category) {
					case 'utilities':
						this.utilities[message.command](message.additionalArgs);
						break;
				}
			},
			false
		);
	};
}

new App().executeOnLoad();
