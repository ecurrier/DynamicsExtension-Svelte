export class Constants {
	WebApiEndpoint = '/api/data/v9.2/';

	FormTypes = {
		Undefined: 0,
		Create: 1,
		Update: 2,
		ReadOnly: 3,
		Disabled: 4,
		BulkEdit: 6
	};

	PageContexts = {
		ModelDrivenApp: 'model-driven-app',
		Portal: 'portal'
	};
}
