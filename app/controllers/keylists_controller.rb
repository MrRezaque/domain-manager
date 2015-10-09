class KeylistsController < ApplicationController
  before_action :set_keylist, only: [:show, :edit, :update, :destroy]

  # GET /keylists
  # GET /keylists.json
  def index
    @keylists = Keylist.all.eager_load(:resources) #.where("resources.status = 'active'")
    #keylists = Keylist.where(active: true).eager_load(:resources).where("resources.status = 'active'")
  end

  # GET /keylists/1
  # GET /keylists/1.json
  def show
  end

  # GET /keylists/new
  def new
    @keylist = Keylist.new
    #5.times { @keylist.resources.new }
  end

  # GET /keylists/1/edit
  def edit
    #5.times { @keylist.resources.build }
  end

  # POST /keylists
  # POST /keylists.json
  def create
    @keylist = Keylist.new(keylist_params)

    respond_to do |format|
      if @keylist.save
        format.html { redirect_to @keylist, notice: 'Keylist was successfully created.' }
        format.json { render :show, status: :created, location: @keylist }
      else
        format.html { render :new }
        format.json { render json: @keylist.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /keylists/1
  # PATCH/PUT /keylists/1.json
  def update
    respond_to do |format|
      if @keylist.update(keylist_params)
        format.html { redirect_to @keylist, notice: 'Keylist was successfully updated.' }
        format.json { render :show, status: :ok, location: @keylist }
      else
        format.html { render :edit }
        format.json { render json: @keylist.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /keylists/1
  # DELETE /keylists/1.json
  def destroy
    @keylist.destroy
    respond_to do |format|
      format.html { redirect_to keylists_url, notice: 'Keylist was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_keylist
      @keylist = Keylist.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def keylist_params
      params.require(:keylist).permit(:keywords, :active, resources: [:id, :name] )
    end
end
