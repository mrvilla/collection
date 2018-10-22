module.exports = function (context) {
	return [
		{
			type: 'checkbox',
			name: 'apiMethods',
			message: 'Which methods do you want to provide by your endpoint?',
			choices: [
				{
					name: 'Create',
					value: 'create'
				},
				{
					name: 'Read',
					value: 'read'
				},
				{
					name: 'Update',
					value: 'update'
				},
				{
					name: 'Delete',
					value: 'delete'
				}
			],
			default: [
				'create',
				'read',
				'update',
				'delete'
			]
		}
	]
};