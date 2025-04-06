import { Common } from './common';

export class Utilities {
	common: Common;

	constructor(private common: Common) {
		this.common = common;
	}

	public enableAdminMode = () => {
		try {
			this.setAttributesOptional();
			this.showAndEnableControls();

			// Cache selected tab before showing all tabs and sections
			const selectedTab = this.getSelectedTab();
			
			this.showTabsAndSections();
			this.focusAndExpandTab(selectedTab);
		} catch (error) {
			this.common.displayNotification(false, `Error encountered: ${error.message}`);
			return;
		}

		this.common.displayNotification(true, 'Successfully enabled admin mode');
	};

	private setAttributesOptional = () => {
		Xrm.Page.data.entity.attributes.forEach((a) => a?.setRequiredLevel?.('none'));
	};

	private showAndEnableControls = () => {
		Xrm.Page.ui.controls.forEach((c) => {
			c?.setVisible?.(true);
			c?.setDisabled?.(false);
			c?.clearNotification?.();
		});
	};

	private getSelectedTab = () => {
		return Xrm.Page.ui.tabs.get((tab) => tab?.getDisplayState?.() === 'expanded')[0];
	};

	private showTabsAndSections = () => {
		Xrm.Page.ui.tabs.forEach((tab) => {
			tab?.setVisible?.(true);
			tab?.setDisplayState?.('expanded');
			tab.sections.forEach((s) => s?.setVisible?.(true));
		});
	};

	private focusAndExpandTab = (tab) => {
		tab?.setDisplayState?.('expanded');
		tab?.setFocus?.();
	};
}
