class DisplaysController < ApplicationController
  def show
    @users = User.order('id ASC').all

    if Mention.all.present?
      @latest_mention = Mention.order('created_at DESC').first.id
      @user_most_mentions = User.where.not(mentions_count: nil).order('mentions_count DESC, updated_at DESC').first.id
    end
  end
end