class DisplaysController < ApplicationController
  def show
    @users = User.order('id ASC').all

    if Mention.all.present?
      @latest_mention = Mention.order('created_at DESC').first.id
    end
  end
end