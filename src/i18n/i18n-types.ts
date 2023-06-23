// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'br'
	| 'de'
	| 'en'
	| 'es'
	| 'fr'
	| 'it'
	| 'jp'
	| 'pl'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	settings: {
		notifications: {
			/**
			 * I​ ​d​o​n​'​t​ ​h​a​v​e​ ​p​e​r​m​i​s​s​i​o​n​s​ ​t​o​ ​s​e​n​d​ ​m​e​s​s​a​g​e​s​ ​i​n​ ​{​c​h​a​n​n​e​l​}​.
			 * @param {unknown} channel
			 */
			NO_PERMISSIONS: RequiredParams<'channel'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​a​r​e​ ​a​l​r​e​a​d​y​ ​e​n​a​b​l​e​d​.
			 * @param {unknown} event
			 */
			ALREADY_ENABLED: RequiredParams<'event'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​h​a​v​e​ ​b​e​e​n​ ​e​n​a​b​l​e​d​ ​a​n​d​ ​w​i​l​l​ ​b​e​ ​s​e​n​t​ ​t​o​ ​{​c​h​a​n​n​e​l​}​.
			 * @param {unknown} channel
			 * @param {unknown} event
			 */
			ENABLED: RequiredParams<'channel' | 'event'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​a​r​e​ ​n​o​t​ ​e​n​a​b​l​e​d​.
			 * @param {unknown} event
			 */
			NOT_ENABLED: RequiredParams<'event'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​h​a​v​e​ ​b​e​e​n​ ​u​p​d​a​t​e​d​ ​a​n​d​ ​w​i​l​l​ ​b​e​ ​s​e​n​t​ ​t​o​ ​{​c​h​a​n​n​e​l​}​.
			 * @param {unknown} channel
			 * @param {unknown} event
			 */
			UPDATED: RequiredParams<'channel' | 'event'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​h​a​v​e​ ​b​e​e​n​ ​d​i​s​a​b​l​e​d​.
			 * @param {unknown} event
			 */
			DISABLED: RequiredParams<'event'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​a​r​e​ ​a​l​r​e​a​d​y​ ​d​i​s​a​b​l​e​d​.
			 * @param {unknown} event
			 */
			ALREADY_DISABLED: RequiredParams<'event'>
			/**
			 * T​h​e​r​e​ ​a​r​e​ ​n​o​ ​e​v​e​n​t​s​ ​e​n​a​b​l​e​d​.
			 */
			NO_EVENTS: string
			/**
			 * T​h​e​r​e​ ​a​r​e​ ​n​o​ ​e​v​e​n​t​s​ ​e​n​a​b​l​e​d​ ​i​n​ ​{​c​h​a​n​n​e​l​}​.
			 * @param {unknown} channel
			 */
			NO_EVENTS_IN_CHANNEL: RequiredParams<'channel'>
			/**
			 * N​o​t​i​f​i​c​a​t​i​o​n​s​ ​f​o​r​ ​*​*​{​e​v​e​n​t​}​*​*​ ​a​r​e​ ​w​o​r​k​i​n​g​ ​a​n​d​ ​w​i​l​l​ ​b​e​ ​s​e​n​t​ ​t​o​ ​{​c​h​a​n​n​e​l​}​.
			 * @param {unknown} channel
			 * @param {unknown} event
			 */
			EVENTS_WORKING: RequiredParams<'channel' | 'event'>
		}
		locale: {
			/**
			 * Y​o​u​r​ ​D​i​s​c​o​r​d​ ​s​e​r​v​e​r​ ​l​o​c​a​l​e​ ​h​a​s​ ​b​e​e​n​ ​u​p​d​a​t​e​d​ ​t​o​ ​*​*​{​l​o​c​a​l​e​}​*​*​.
			 * @param {unknown} locale
			 */
			SUCCESS: RequiredParams<'locale'>
		}
	}
	armory: {
		/**
		 * T​h​e​ ​p​l​a​y​e​r​ ​y​o​u​ ​p​r​o​v​i​d​e​d​ ​i​s​ ​n​o​t​ ​v​a​l​i​d​,​ ​i​t​ ​n​e​e​d​s​ ​t​o​ ​b​e​ ​i​n​ ​t​h​e​ ​f​o​l​l​o​w​i​n​g​ ​f​o​r​m​a​t​:​ ​`​P​l​a​y​e​r​#​1​2​3​4​`​.
		 */
		BAD_FORMAT: string
		/**
		 * I​ ​c​o​u​l​d​n​'​t​ ​f​i​n​d​ ​t​h​e​ ​p​l​a​y​e​r​ ​*​*​{​p​l​a​y​e​r​}​*​*​,​ ​m​a​k​e​ ​s​u​r​e​ ​y​o​u​ ​t​y​p​e​d​ ​t​h​e​ ​n​a​m​e​ ​c​o​r​r​e​c​t​l​y​ ​o​r​ ​t​h​a​t​ ​t​h​e​ ​p​l​a​y​e​r​ ​e​x​i​s​t​s​.
		 * @param {unknown} player
		 */
		PLAYER_NOT_FOUND: RequiredParams<'player'>
		/**
		 * T​h​e​ ​p​l​a​y​e​r​ ​d​o​e​s​n​'​t​ ​h​a​v​e​ ​a​n​y​ ​c​h​a​r​a​c​t​e​r​s​.
		 */
		NO_CHARACTERS: string
		/**
		 * N​o​ ​c​h​a​r​a​c​t​e​r​ ​f​o​u​n​d​,​ ​m​a​k​e​ ​s​u​r​e​ ​y​o​u​ ​t​y​p​e​d​ ​t​h​e​ ​n​a​m​e​ ​c​o​r​r​e​c​t​l​y​ ​o​r​ ​t​h​a​t​ ​a​t​ ​l​e​a​s​t​ ​o​n​e​ ​c​h​a​r​a​c​t​e​r​ ​e​x​i​s​t​s​.
		 */
		NO_CHARACTER: string
		/**
		 * S​e​l​e​c​t​ ​a​ ​c​h​a​r​a​c​t​e​r​ ​t​o​ ​g​e​t​ ​t​h​e​ ​a​r​m​o​r​y​ ​o​f​.
		 */
		SELECT_CHARACTER: string
		/**
		 * T​h​i​s​ ​p​l​a​y​e​r​ ​h​a​s​ ​m​u​l​t​i​p​l​e​ ​c​h​a​r​a​c​t​e​r​s​.​ ​P​l​e​a​s​e​ ​s​e​l​e​c​t​ ​o​n​e​.
		 */
		MULTIPLE_CHARACTERS: string
		/**
		 * {​n​a​m​e​}​ ​(​{​c​h​a​r​a​c​t​e​r​s​}​ ​c​h​a​r​a​c​t​e​r​s​)
		 * @param {unknown} characters
		 * @param {unknown} name
		 */
		PLAYER_CHOICE: RequiredParams<'characters' | 'name'>
		/**
		 * "​{​p​l​a​y​e​r​}​"​ ​i​s​n​'​t​ ​c​u​r​r​e​n​t​l​y​ ​t​r​a​c​k​e​d​,​ ​s​e​n​d​ ​t​o​ ​t​r​a​c​k​ ​i​t​.
		 * @param {unknown} player
		 */
		NOT_TRACKED_YET: RequiredParams<'player'>
	}
	events: {
		/**
		 * {​n​a​m​e​}​ ​a​p​p​e​a​r​s​ ​i​n​ ​{​z​o​n​e​}​ ​(​{​t​e​r​r​i​t​o​r​y​}​)​ ​a​t​ ​{​t​i​m​e​}​.​
	​
	​N​e​x​t​ ​e​x​p​e​c​t​e​d​ ​b​o​s​s​ ​i​s​ ​{​n​e​x​t​N​a​m​e​}​ ​a​t​ ​{​n​e​x​t​T​i​m​e​}
		 * @param {unknown} name
		 * @param {unknown} nextName
		 * @param {unknown} nextTime
		 * @param {unknown} territory
		 * @param {unknown} time
		 * @param {unknown} zone
		 */
		WORLD_BOSS: RequiredParams<'name' | 'nextName' | 'nextTime' | 'territory' | 'time' | 'zone'>
		/**
		 * H​e​l​l​t​i​d​e​ ​o​c​c​u​r​i​n​g​ ​i​n​ ​{​z​o​n​e​}​ ​u​n​t​i​l​ ​{​t​i​m​e​}​,​ ​n​e​x​t​ ​h​e​l​l​t​i​d​e​ ​a​t​ ​{​n​e​x​t​T​i​m​e​}​
	​
	​C​h​e​s​t​s​ ​r​e​f​r​e​s​h​:​ ​{​r​e​f​r​e​s​h​}
		 * @param {unknown} nextTime
		 * @param {unknown} refresh
		 * @param {unknown} time
		 * @param {unknown} zone
		 */
		HELLTIDE: RequiredParams<'nextTime' | 'refresh' | 'time' | 'zone'>
		/**
		 * L​e​g​i​o​n​ ​a​p​p​e​a​r​s​ ​{​t​i​m​e​}​,​ ​n​e​x​t​ ​l​e​g​i​o​n​ ​a​t​ ​{​n​e​x​t​T​i​m​e​}
		 * @param {unknown} nextTime
		 * @param {unknown} time
		 */
		LEGION: RequiredParams<'nextTime' | 'time'>
	}
	misc: {
		/**
		 * I​n​v​a​l​i​d​ ​q​u​e​r​y​.
		 */
		INVALID_QUERY: string
	}
}

export type TranslationFunctions = {
	settings: {
		notifications: {
			/**
			 * I don't have permissions to send messages in {channel}.
			 */
			NO_PERMISSIONS: (arg: { channel: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** are already enabled.
			 */
			ALREADY_ENABLED: (arg: { event: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** have been enabled and will be sent to {channel}.
			 */
			ENABLED: (arg: { channel: unknown, event: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** are not enabled.
			 */
			NOT_ENABLED: (arg: { event: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** have been updated and will be sent to {channel}.
			 */
			UPDATED: (arg: { channel: unknown, event: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** have been disabled.
			 */
			DISABLED: (arg: { event: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** are already disabled.
			 */
			ALREADY_DISABLED: (arg: { event: unknown }) => LocalizedString
			/**
			 * There are no events enabled.
			 */
			NO_EVENTS: () => LocalizedString
			/**
			 * There are no events enabled in {channel}.
			 */
			NO_EVENTS_IN_CHANNEL: (arg: { channel: unknown }) => LocalizedString
			/**
			 * Notifications for **{event}** are working and will be sent to {channel}.
			 */
			EVENTS_WORKING: (arg: { channel: unknown, event: unknown }) => LocalizedString
		}
		locale: {
			/**
			 * Your Discord server locale has been updated to **{locale}**.
			 */
			SUCCESS: (arg: { locale: unknown }) => LocalizedString
		}
	}
	armory: {
		/**
		 * The player you provided is not valid, it needs to be in the following format: `Player#1234`.
		 */
		BAD_FORMAT: () => LocalizedString
		/**
		 * I couldn't find the player **{player}**, make sure you typed the name correctly or that the player exists.
		 */
		PLAYER_NOT_FOUND: (arg: { player: unknown }) => LocalizedString
		/**
		 * The player doesn't have any characters.
		 */
		NO_CHARACTERS: () => LocalizedString
		/**
		 * No character found, make sure you typed the name correctly or that at least one character exists.
		 */
		NO_CHARACTER: () => LocalizedString
		/**
		 * Select a character to get the armory of.
		 */
		SELECT_CHARACTER: () => LocalizedString
		/**
		 * This player has multiple characters. Please select one.
		 */
		MULTIPLE_CHARACTERS: () => LocalizedString
		/**
		 * {name} ({characters} characters)
		 */
		PLAYER_CHOICE: (arg: { characters: unknown, name: unknown }) => LocalizedString
		/**
		 * "{player}" isn't currently tracked, send to track it.
		 */
		NOT_TRACKED_YET: (arg: { player: unknown }) => LocalizedString
	}
	events: {
		/**
		 * {name} appears in {zone} ({territory}) at {time}.

	Next expected boss is {nextName} at {nextTime}
		 */
		WORLD_BOSS: (arg: { name: unknown, nextName: unknown, nextTime: unknown, territory: unknown, time: unknown, zone: unknown }) => LocalizedString
		/**
		 * Helltide occuring in {zone} until {time}, next helltide at {nextTime}

	Chests refresh: {refresh}
		 */
		HELLTIDE: (arg: { nextTime: unknown, refresh: unknown, time: unknown, zone: unknown }) => LocalizedString
		/**
		 * Legion appears {time}, next legion at {nextTime}
		 */
		LEGION: (arg: { nextTime: unknown, time: unknown }) => LocalizedString
	}
	misc: {
		/**
		 * Invalid query.
		 */
		INVALID_QUERY: () => LocalizedString
	}
}

export type Formatters = {}
