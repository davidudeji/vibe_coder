/** An array of routes
@type {string[]}
*/
export const publicRoutes: string[] = [

]

/**
 An array of routes that are protected. These routes requires authentication
 @type {string[]}
 */

 export const publicRoutes: string[] = [
    
 ]

 /**
  An array of routes that accessible to the public
  @type {string[]}
  */

  export const protectedRoutes: string[] = [
    "/",
  ]

  /**
   An array of routes that are accessible to the public
   Routes that start with this (/api/auth) prefix do not require authentication
   @type {string[]}
   */

   export const authRoutes: string[] = [
    "/auth/sign-in",
   ]

/**
 * An array of routes that are accessible to public 
 * Routes that start with this (/api/auth) prefix do not require authentication
 * @type {string}
 */

export const apiAuthPrefix: string = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = "/"; // Changed to redirect to home page after login