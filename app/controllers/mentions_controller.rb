class MentionsController < ApplicationController
    def index
      users = User.all
      num_users = users.length
      grouped_users = users.each_slice((num_users / 2.0).ceil).to_a

      @users_group_a = grouped_users[0]
      @users_group_b = grouped_users[1]

      if Mention.all.present?
        @latest_mention = Mention.order('created_at DESC').first.id
        @user_most_mentions = User.order('mentions_count DESC').first.id
      end
    end

    def new
      @mention = Mention.new
      @mention_types = YAML.load_file(Rails.root.join('config', 'mention_types_config.yml'))
      @mention_user = new_mention_params[:id]
      @mention_user_name = User.find_by(id: @mention_user).name
    end

    def create
      @mention = Mention.create do |m|
        m.user = User.find_by(id: mention_params[:user].to_i)
        m.mention_type = mention_params[:mention_type]
        m.comment = mention_params[:comment]
      end

      if @mention.save
        redirect_to :root
      end

    end

    private
    def mention_params
      params.require(:mention).permit(:user, :mention_type, :comment)
    end

    def new_mention_params
      params.permit(:id)
    end
end

