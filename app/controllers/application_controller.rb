class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

#way to find currently logged in user record

# available in all controllers
  private

# find session if it exists
#fetched one time per request with instance variable
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  #for view access, make it a helper method

  helper_method :current_user

#ensure user is logged in before actions

# before_filter :authorize only: [:edit, :update]
  def authorize
    redirect_to login_url, alert: "Not Authorized" if current_user.nil?
  end

end
