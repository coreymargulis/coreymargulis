<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
define('DB_NAME', 'corey'); 

 define('DB_USER', 'root'); 

 define('DB_PASSWORD', 'root'); 

 define('DB_HOST', 'localhost'); 



/*  define('DB_NAME', 'coreystaging'); */ 

/** MySQL database username */
/* define('DB_USER', 'coreystaging'); */

/** MySQL database password */
/* define('DB_PASSWORD', 'C@itlin1'); */ 

/** MySQL hostname */
/*  define('DB_HOST', '68.178.217.44'); */ 

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Q;g_:;-Hlv+j_i1g2x;fWk]?[jO[egwCB(Nw:VB}VXKKSmO()(MUZevVHi_-|kbO');
define('SECURE_AUTH_KEY',  '#hWs.1<<C&`nI<&r#2R1K$|5b~R>r#sOF/>,^9|?$}+HY4j~(~H3+A`?HOGyuD{A');
define('LOGGED_IN_KEY',    'NmA93KX^{?,.5PpO+?J0tlcfU7<Am<jDkS*XJBg_JSY(Ccv0K[SR:(at+s+5u6jo');
define('NONCE_KEY',        '7F)/s}{eLQm$}baA%tF_|Eo).}}I8i{Oe53hO*[OkGBBj=$u$gV[!YX$m]~UqPQj');
define('AUTH_SALT',        'ZIva3o^<<YqkgZCIu8r{)ko`&jo%gtHLGUl/L*q7pHy|T.#9`@+)wF5$^D@fOlrM');
define('SECURE_AUTH_SALT', 'UP0FO e6^4,:>RP(0;J`XtV3RX7t!.v6&cq8X5x&P7sF~[Tx]-+d-r+8&_V-j?jh');
define('LOGGED_IN_SALT',   '{z5U5yw-Lt+TU]ci17M}vnvRH-Z(f7fF|(4OjM8Ik~qJP/(Kes@yus v5r`H5>ua');
define('NONCE_SALT',       '{Vnj`:NrE/pA8U>,;zV_ 4I-?F,a{H^k1Yi^dg}&-|&~R7-f?;kMj|#MN#nmrh0Y');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
