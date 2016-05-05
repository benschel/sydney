class MentionsController < ApplicationController
    def index
      @users = User.all
      num_users = @users.length
      grouped_users = @users.each_slice(num_users / 2).to_a

      @users_group_a = grouped_users[0]
      @users_group_b = grouped_users[1]
    end

    def new
      @mention = Mention.new
      @mention_types = YAML.load_file(Rails.root.join('config', 'mention_types_config.yml'))
    end

    def create
      @user_id = User.find_by(id: mention_params[:user].to_i)

      @mention = Mention.create do |m|
        m.user = @user_id
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
end

