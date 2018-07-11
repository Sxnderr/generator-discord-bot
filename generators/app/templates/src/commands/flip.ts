
/**
 * @module Commands
 */
/**
 * ignore
 */
import {config, genEmbed} from '../utils';
import * as Commando from 'discord.js-commando';

/**
 * Coin flip
 */
const flip = () => (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';

export class FlipCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'flip',
			group: 'misc',
			memberName: 'flip',
			description: 'Flip a theoretical coin.',
			details: 'Flip a theoretical coin.',
			examples: ['flip'],
			guildOnly: true
		});
	}

	hasPermission(msg) {
		return true;
	}

	async run(msg) {
		const flipped = flip();
		console.log(`Coin flipped by ${msg.author.tag}: ${flipped}`);
		const embed = genEmbed('Coin Flipped', `Result: ${flipped}`);
		embed.addField('By:', msg.author.toString());
		return msg.channel.send({embed});
	}

}
