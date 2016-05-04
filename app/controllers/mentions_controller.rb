class MentionsController < ApplicationController
    def index
      @users = User.all
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

